package com.shleecloud.mango_contents

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import android.widget.TextView
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.database.ktx.database
import com.google.firebase.ktx.Firebase

class ViewActivity : AppCompatActivity() {

    private lateinit var auth: FirebaseAuth

    override fun onCreate(savedInstanceState: Bundle?) {

        auth = Firebase.auth

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_view)

        val webView = findViewById<WebView>(R.id.webView)

        val url = intent.getStringExtra("url").toString()
        val imageUrl = intent.getStringExtra("imageUrl").toString()
        val title = intent.getStringExtra("title").toString()

        webView.loadUrl(url)
        val saveText = findViewById<TextView>(R.id.saveText)
        saveText.setOnClickListener {
            // Write a message to the database
            val database = Firebase.database
            val myBookmarkRef = database.getReference("bookmark_ref")

            myBookmarkRef.child(auth.currentUser!!.uid).push()
                .setValue(ContentsModel(url, imageUrl, title))
            Toast.makeText(this, "저장되었습니다.", Toast.LENGTH_SHORT).show()
        }
    }
}