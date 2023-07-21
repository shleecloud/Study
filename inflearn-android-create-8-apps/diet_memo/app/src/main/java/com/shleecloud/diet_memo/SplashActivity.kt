package com.shleecloud.diet_memo

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.util.Log
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

@SuppressLint("CustomSplashScreen")
class SplashActivity : AppCompatActivity() {

    private lateinit var auth: FirebaseAuth

    @Suppress("DEPRECATION")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)

        auth = Firebase.auth

        try {
            Toast.makeText(this, "SignIn Success.", Toast.LENGTH_SHORT).show()

            Handler().postDelayed({
                startActivity(Intent(this, MainActivity::class.java))
                finish()
            }, 2000)
        } catch (e: Exception) {
            Log.d("SPLASH", "No User")
            auth.signInAnonymously()
                .addOnCompleteListener(this) { task ->
                    if (task.isSuccessful) {
                        Toast.makeText(this, "SignUp Success.", Toast.LENGTH_SHORT).show()

                        Handler().postDelayed({
                            startActivity(Intent(this, MainActivity::class.java))
                            finish()
                        }, 2000)

                    } else {
                        Toast.makeText(this, "SignUp Failed.", Toast.LENGTH_SHORT).show()
                    }
                }
        }
    }
}