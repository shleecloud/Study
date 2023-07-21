package com.shleecloud.listview_ex

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.widget.ListView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val listItem = mutableListOf<ListViewModel>()

        listItem.add(ListViewModel("a1", "a2"))
        listItem.add(ListViewModel("b1", "b2"))
        listItem.add(ListViewModel("c1", "c2"))

        val listview = findViewById<ListView>(R.id.mainListView)

        val listAdapter = ListViewAdapter(listItem)
        listview.adapter = listAdapter

        val adapter = ListViewAdapter(listItem)
    }

    private var isDouble = false
    override fun onBackPressed() {
        if (isDouble == true) {
            finish()
        }

        isDouble = true
        Toast.makeText(this, "종료하시려면 더블클릭", Toast.LENGTH_LONG).show()

        Handler().postDelayed({
            isDouble = false
        }, 2000)
    }

}