package com.shleecloud.bts_lecture

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // 화면 클릭 감지
        val image1 = findViewById<ImageView>(R.id.btsImage1)
        image1.setOnClickListener {
            Toast.makeText(this, "1번 클릭 완료", Toast.LENGTH_LONG).show()

            val intent = Intent(this, Bts1Activity::class.java)
            startActivity(intent)


        }
    }
}