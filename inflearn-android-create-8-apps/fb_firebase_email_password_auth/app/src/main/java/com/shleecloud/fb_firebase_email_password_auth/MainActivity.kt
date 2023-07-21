package com.shleecloud.fb_firebase_email_password_auth

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

class MainActivity : AppCompatActivity() {

    private lateinit var auth: FirebaseAuth

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        auth = Firebase.auth

        val signUpButton = findViewById<Button>(R.id.signUpButton)
        val signInButton = findViewById<Button>(R.id.signInButton)
        val signOutButton = findViewById<Button>(R.id.signOutButton)

        signUpButton.setOnClickListener {
            val email = findViewById<EditText>(R.id.emailArea)
            val password = findViewById<EditText>(R.id.passwordArea)

            Log.d("MainActivity", "email: ${email.text.toString()}")
            Log.d("MainActivity", "password: ${password.text.toString()}")

            auth.createUserWithEmailAndPassword(email.text.toString(), password.text.toString())
                .addOnCompleteListener(this) { task ->
                    if (task.isSuccessful) {
                        // Sign in success, update UI with the signed-in user's information
                        Log.d("createUserWithEmail:success", task.result.toString())
                        Toast.makeText(this, "Authentication success.", Toast.LENGTH_SHORT).show()
                    } else {
                        // If sign in fails, display a message to the user.
                        Log.w("createUserWithEmail:failure", task.exception)
                        Toast.makeText(
                            this,
                            "Authentication failed.",
                            Toast.LENGTH_SHORT,
                        ).show()
                    }
                }
        }

        signInButton.setOnClickListener {
            val email = findViewById<EditText>(R.id.emailArea)
            val password = findViewById<EditText>(R.id.passwordArea)

            Log.d("MainActivity", "email: ${email.text.toString()}")
            Log.d("MainActivity", "password: ${password.text.toString()}")

            auth.signInWithEmailAndPassword(email.text.toString(), password.text.toString())
                .addOnCompleteListener(this) { task ->
                    if (task.isSuccessful) {
                        // Sign in success, update UI with the signed-in user's information
                        Log.d("signInWithEmail:success", task.result.toString())
                        val user = auth.currentUser
                    } else {
                        // If sign in fails, display a message to the user.
                        Log.w("signInWithEmail:failure", task.exception)
                        Toast.makeText(
                            baseContext,
                            "Authentication failed.",
                            Toast.LENGTH_SHORT,
                        ).show()
                    }
                }
        }

        signOutButton.setOnClickListener {
            Firebase.auth.signOut()
            Toast.makeText(this, "Sign out success.", Toast.LENGTH_SHORT).show()
        }

    }
}