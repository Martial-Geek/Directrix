from flask import Flask, redirect, render_template, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    s="Sayan"
    # return redirect("http://localhost:3000/")
    return("Hello!")


@app.route('/disease', methods=['GET','POST'])
def index1():
    response = jsonify(message="Sayan")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return (response)



if __name__ == "__main__":
    app.run(port=8080, debug=True)