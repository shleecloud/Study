package com.shleecloud.mango_contents

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {

    private val items = mutableListOf<ContentsModel>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val bookmarkBtn = findViewById<TextView>(R.id.bookmarkBtn)
        bookmarkBtn.setOnClickListener {
            startActivity(Intent(this, BookmarkActivity::class.java))
        }

        items.add(
            ContentsModel(
                url = "https://www.mangoplate.com/restaurants/naO5C9wSDnbr",
                imageUrl = "https://mp-seoul-image-production-s3.mangoplate.com/908198_1613908519563798.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
                titleText = "베이컨시"
            )
        )
        items.add(
            ContentsModel(
                url = "https://www.mangoplate.com/restaurants/XRoMziImmYCC",
                imageUrl = "https://mp-seoul-image-production-s3.mangoplate.com/2252480_1673490010435231.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
                titleText = "뉴욕택시디저트"
            )
        )
        items.add(
            ContentsModel(
                url = "https://www.mangoplate.com/restaurants/q1PDtSFDsXea",
                imageUrl = "https://mp-seoul-image-production-s3.mangoplate.com/705256_1575706043849051.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
                titleText = "오월의김밥"
            )
        )
        items.add(
            ContentsModel(
                url = "https://www.mangoplate.com/restaurants/CbdJqQErxKsX",
                imageUrl = "https://mp-seoul-image-production-s3.mangoplate.com/611133_1550401765568269.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
                titleText = "빠사삭튀김포차"
            )
        )
        items.add(
            ContentsModel(
                url = "https://www.mangoplate.com/restaurants/naO5C9wSDnbr",
                imageUrl = "https://mp-seoul-image-production-s3.mangoplate.com/908198_1613908519563798.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
                titleText = "베이컨시"
            )
        )
        items.add(
            ContentsModel(
                url = "https://www.mangoplate.com/restaurants/XRoMziImmYCC",
                imageUrl = "https://mp-seoul-image-production-s3.mangoplate.com/2252480_1673490010435231.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
                titleText = "뉴욕택시디저트"
            )
        )
        items.add(
            ContentsModel(
                url = "https://www.mangoplate.com/restaurants/q1PDtSFDsXea",
                imageUrl = "https://mp-seoul-image-production-s3.mangoplate.com/705256_1575706043849051.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
                titleText = "오월의김밥"
            )
        )
        items.add(
            ContentsModel(
                url = "https://www.mangoplate.com/restaurants/CbdJqQErxKsX",
                imageUrl = "https://mp-seoul-image-production-s3.mangoplate.com/611133_1550401765568269.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
                titleText = "빠사삭튀김포차"
            )
        )

        val recyclerView = findViewById<RecyclerView>(R.id.rv)
        val rvAdapter = RVAdapter(this, items)
        recyclerView.adapter = rvAdapter

        rvAdapter.itemClick = object : RVAdapter.ItemClick {
            override fun onClick(view: View, position: Int) {
                val intent = Intent(baseContext, ViewActivity::class.java)
                intent.putExtra("url", items[position].url)
                intent.putExtra("title", items[position].titleText)
                intent.putExtra("imageUrl", items[position].imageUrl)

                startActivity(intent)

            }
        }

        recyclerView.layoutManager = GridLayoutManager(this, 2)

    }
}