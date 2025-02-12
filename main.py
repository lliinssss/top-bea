from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/login", methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        return redirect(url_for('login'))
    else:
        return render_template("index.html")



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)