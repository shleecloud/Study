package com.shleecloud.diet_memo

import android.annotation.SuppressLint
import android.app.DatePickerDialog
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.ListView
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import com.google.firebase.auth.ktx.auth
import com.google.firebase.database.ktx.database
import com.google.firebase.ktx.Firebase
import java.util.GregorianCalendar

class MainActivity : AppCompatActivity() {

    private val dataModelList = mutableListOf<DataModel>()

    @SuppressLint("InflateParams", "MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // * DB 초기화
        val database = Firebase.database
        val myRef = database.getReference("myMemo").child(Firebase.auth.currentUser!!.uid)

        // * ListView 초기화
        val listView = findViewById<ListView>(R.id.mainLV)
        val adapterList = ListViewAdapter(dataModelList)
        listView.adapter = adapterList

        // 비동기가 처리되기 전이라 아무것도 안나옴
        Log.d("Does not load DataModel yet", dataModelList.toString())

        // * 파이어베이스에서 데이터 불러오기
        myRef.addValueEventListener(object : com.google.firebase.database.ValueEventListener {
            override fun onDataChange(snapshot: com.google.firebase.database.DataSnapshot) {
                // 리스트뷰 초기화
                dataModelList.clear()

                for (dataModel in snapshot.children) {
                    Log.d("FIREBASE", "Value is: $dataModel")
                    // 리스트뷰에 데이터 추가
                    dataModelList.add(dataModel.getValue(DataModel::class.java)!!)
                }
                // 비동기로 데이터를 받아온 후 리스트뷰 갱신
                adapterList.notifyDataSetChanged()
                Log.d("Datamodel", dataModelList.toString())
            }

            override fun onCancelled(error: com.google.firebase.database.DatabaseError) {
                Log.w("FIREBASE", "Failed to read value.", error.toException())
            }
        })

        // * 메모 만들기
        val writeBtn = findViewById<ImageView>(R.id.writeBtn)
        writeBtn?.setOnClickListener {

            // * 다이얼로그 띄우기
            val mDialogView = LayoutInflater.from(this).inflate(R.layout.custom_dialog, null)
            val mBuilder = AlertDialog.Builder(this)
                .setView(mDialogView)
                .setTitle("운동 메모 다이얼로그")

            val mAlertDialog = mBuilder.show()
            var dateText = ""

            // * 다이얼로그 -> 날짜 선택하기 버튼
            val dateSelectBtn = mAlertDialog.findViewById<Button>(R.id.dateSelectBtn)
            dateSelectBtn?.setOnClickListener {

                // 캘린더 초기화
                val today = GregorianCalendar()
                val year = today.get(GregorianCalendar.YEAR)
                val month = today.get(GregorianCalendar.MONTH)
                val day = today.get(GregorianCalendar.DAY_OF_MONTH)

                // 캘린더 다이얼로그
                val dlg = DatePickerDialog(this, object : DatePickerDialog.OnDateSetListener {
                    override fun onDateSet(view: android.widget.DatePicker?, year: Int, month: Int, dayOfMonth: Int) {
                        val msg = String.format("%d, %d, %d", year, month + 1, dayOfMonth)
                        Toast.makeText(this@MainActivity, msg, Toast.LENGTH_SHORT).show()

                        dateText = msg
                        mAlertDialog.findViewById<Button>(R.id.dateSelectBtn)?.text = msg
                    }
                }, year, month, day)
                dlg.show()

            }

            // * 다이얼로그 -> 저장하기 버튼
            val saveBtn = mAlertDialog.findViewById<Button>(R.id.saveBtn)
            saveBtn?.setOnClickListener {
                Log.d("SAVE", "SAVE BUTTON CLICKED")
                val memo = mAlertDialog.findViewById<EditText>(R.id.memoText)?.text.toString()

                if (dateText == "") {
                    Toast.makeText(this, "날짜를 선택해주세요.", Toast.LENGTH_SHORT).show()
                    return@setOnClickListener
                }
                if (memo == "") {
                    Toast.makeText(this, "메모를 입력해주세요.", Toast.LENGTH_SHORT).show()
                    return@setOnClickListener
                }

                val model = DataModel(dateText, memo)

                myRef.push().setValue(model)

                mAlertDialog.dismiss()
            }
        }
    }
}