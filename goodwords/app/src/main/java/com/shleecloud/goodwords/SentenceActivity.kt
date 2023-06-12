package com.shleecloud.goodwords

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView

class SentenceActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sentence)

        val sentenceList = mutableListOf<String>()
        sentenceList.add("검정화면에 대충 흰글씨 쓰면 명언같다")
        sentenceList.add("생각은 기적을 일으킨다.")
        sentenceList.add("인간은 거울처럼 다른 사람을 비춘다.")
        sentenceList.add("우리는 우리의 행동으로 판단당한다.")
        sentenceList.add("불행은 영원하지 않으며, 행복도 영원하지 않다.")

        val sentenceAdapter = ListViewAdapter(sentenceList)
        val listview = findViewById<ListView>(R.id.sentenceListView)

        listview.adapter = sentenceAdapter
    }
}