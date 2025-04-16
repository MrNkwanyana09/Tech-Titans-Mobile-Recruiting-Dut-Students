package com.example.auth;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SignUpActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        // Initialize UI elements
        EditText usernameEditText = findViewById(R.id.editUsernameSignup);
        EditText emailEditText = findViewById(R.id.editEmailSignup);
        EditText passwordEditText = findViewById(R.id.editPasswordSignup);
        EditText confirmPasswordEditText = findViewById(R.id.editConfirmPasswordSignup);
        Button signUpButton = findViewById(R.id.btnSubmitSignup);
        Button backButton = findViewById(R.id.btnBack);  // The back button

        // Back button functionality to go to the LandingPage (or MainActivity)
        backButton.setOnClickListener(view -> {
            Intent intent = new Intent(SignUpActivity.this, MainActivity.class); // Change this to your LandingPage class
            startActivity(intent);
            finish(); // Close the current activity (optional)
        });

        // Set up click listener for the Sign Up button
        signUpButton.setOnClickListener(view -> {
            String username = usernameEditText.getText().toString().trim();
            String email = emailEditText.getText().toString().trim();
            String password = passwordEditText.getText().toString().trim();
            String confirmPassword = confirmPasswordEditText.getText().toString().trim();

            // Form validation
            if (username.isEmpty()) {
                usernameEditText.setError("Username is required");
                return;
            }

            if (email.isEmpty() || !isValidEmail(email)) {
                emailEditText.setError("Enter a valid email address");
                return;
            }

            if (password.isEmpty() || !isValidPassword(password)) {
                passwordEditText.setError("Password must be 8-20 characters, with at least one uppercase letter, one number, and one special character");
                return;
            }

            if (!password.equals(confirmPassword)) {
                confirmPasswordEditText.setError("Passwords do not match");
                return;
            }

            // Assuming successful validation, proceed with sign-up (e.g., save to database)
            // In this case, just show a Toast and move to LoginActivity
            Toast.makeText(SignUpActivity.this, "Sign Up Successful", Toast.LENGTH_SHORT).show();

            // Redirect to LoginActivity after successful sign-up
            Intent intent = new Intent(SignUpActivity.this, LoginActivity.class);
            startActivity(intent);
            finish(); // Optional: finish the SignUpActivity so the user cannot navigate back
        });
    }

    // Email validation method using regex
    private boolean isValidEmail(String email) {
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }

    // Password validation method with regex (for at least 1 uppercase, 1 number, 1 special char, and length between 8-20)
    private boolean isValidPassword(String password) {
        String passwordRegex = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,20}$";
        Pattern pattern = Pattern.compile(passwordRegex);
        Matcher matcher = pattern.matcher(password);
        return matcher.matches();
    }

}
