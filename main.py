import pandas as pd
from flask import Flask, request, jsonify, render_template, abort, Response as res
from markupsafe import escape
import requests as req
import json

app = Flask(__name__)

# file = pd.read_json("https://yts.mx/api/v2/list_movies.json")


def login(req, res):
    return res.status(404)


@app.route("/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"


@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404


if __name__ == "__main__":
    app.run(debug=True)
