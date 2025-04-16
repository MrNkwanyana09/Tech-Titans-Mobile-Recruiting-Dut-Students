package com.example.auth;

import android.os.Bundle;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import android.database.Cursor;
import java.util.ArrayList;

public class AdminActivity extends AppCompatActivity implements UserAdapter.OnUserDeleteListener {

    RecyclerView recyclerView;
    UserAdapter adapter;
    ArrayList<User> userList = new ArrayList<>();
    DatabaseHelper dbHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin);

        dbHelper = new DatabaseHelper(this);
        recyclerView = findViewById(R.id.recyclerUsers);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        loadUsers();
    }

    private void loadUsers() {
        userList.clear();
        Cursor cursor = dbHelper.getAllUsers();
        while (cursor.moveToNext()) {
            int id = cursor.getInt(cursor.getColumnIndexOrThrow("id"));
            String username = cursor.getString(cursor.getColumnIndexOrThrow("username"));
            String email = cursor.getString(cursor.getColumnIndexOrThrow("email"));
            userList.add(new User(id, username, email));
        }
        adapter = new UserAdapter(userList, this);
        recyclerView.setAdapter(adapter);
    }

    @Override
    public void onUserDelete(int userId) {
        boolean deleted = dbHelper.deleteUser(userId);
        if (deleted) {
            Toast.makeText(this, "User deleted", Toast.LENGTH_SHORT).show();
            loadUsers(); // Refresh list
        } else {
            Toast.makeText(this, "Failed to delete", Toast.LENGTH_SHORT).show();
        }
    }
}
