package com.shleecloud.dice_app

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.databinding.DataBindingUtil
import com.shleecloud.dice_app.databinding.ActivityMainBinding
import kotlin.random.Random

class MainActivity : AppCompatActivity() {

    private lateinit var binding : ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)

        val diceImg1 = binding.dice1
        val diceImg2 = binding.dice2

        binding.diceStartBtn.setOnClickListener {
            Toast.makeText(this, "주사위 Go!", Toast.LENGTH_LONG).show()

            val num1 = resources.getIdentifier("dice_${Random.nextInt(1, 6)}", "drawable", packageName)
            val num2 = resources.getIdentifier("dice_${Random.nextInt(1, 6)}", "drawable", packageName)

            diceImg1.setImageResource(num1)
            diceImg2.setImageResource(num2)
        }
    }
}