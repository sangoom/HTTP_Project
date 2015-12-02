from dogu.server import start, set_server
from flask import Flask
from flask import request

app = Flask(__name__, static_url_path='')

@app.route('/')
def index():
	return app.send_static_file('index.html')

server_setting = set_server(
	app = app,
	use_ssl = False,
	use_http2 = True
)

start([server_setting])
