package com.shleecloud.databinding_ex

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.Toast
import androidx.databinding.DataBindingUtil
import com.shleecloud.databinding_ex.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)

        val btn = findViewById<Button>(R.id.testBtn)
        btn.setOnClickListener {
            Toast.makeText(this, "click!", Toast.LENGTH_LONG).show()
        }

        binding.testBtn.setOnClickListener {
            Toast.makeText(this, "click! 2!", Toast.LENGTH_LONG).show()
            Log.e("MainActivity", "안녕하세요.")
            Log.w("MainActivity", "안녕하세요.")
            Log.i("MainActivity", "안녕하세요.")
            Log.d("MainActivity", "안녕하세요.")
            Log.v("MainActivity", "안녕하세요.")

        }
    }
}