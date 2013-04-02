setTimeout(function() {
	ws = new WebSocket('ws://localhost:35353');
	ws.onopen = function() {
		ws.onclose = function() { document.location.reload(); }
	}
}, 500);