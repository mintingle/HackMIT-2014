package com.parse;

import android.app.Activity;
import android.os.Bundle;

import com.example.helpme.R;
import com.parse.ParseAnalytics;

public class ParseStarterProjectActivity extends Activity {
	/** Called when the activity is first created. */
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		ParseAnalytics.trackAppOpened(getIntent());
	}
}