document.addEventListener('DOMContentLoaded', function() {
    // Define credentials (in a real application, these would come from a database)
    const studentCredentials = {
        id: 'student123',
        password: 'studentpass'
    };

    const adminCredentials = {
        id: 'admin123',
        password: 'adminpass'
    };

    // Handle Student Form submission
    document.getElementById('student').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const studentId = document.getElementById('studentId').value;
        const studentPassword = document.getElementById('studentPassword').value;

        if (studentId === studentCredentials.id && studentPassword === studentCredentials.password) {
            // Redirect to the student page
            window.location.href = 'student-dashboard.html';
        } else {
            alert('Invalid Student ID or Password');
        }
    });

    // Handle Admin Form submission
    document.getElementById('admin').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const adminId = document.getElementById('adminId').value;
        const adminPassword = document.getElementById('adminPassword').value;

        if (adminId === adminCredentials.id && adminPassword === adminCredentials.password) {
            // Redirect to the admin page
            window.location.href = 'admin-dashboard.html';
        } else {
            alert('Invalid Admin ID or Password');
        }
    });
});
