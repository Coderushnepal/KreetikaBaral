function Ball() {
	this.isDeleteable = false;
	this.isDeleted = false;
	var that = this;
	
	this.create = function(noOfBalls) {
		this.ball = document.createElement('div');
		this.ball.id = i;
		this.ball.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];
		this.ball.style.position = 'absolute';
		this.ball.style.borderRadius = '50%';
		document.body.appendChild(this.ball);

		//To delete the balls after movement
		this.ball.addEventListener('click', function() {
			if (that.isDeleteable) {
				that.remove();
			}
		});
	};

	
	this.setDimension = function(width, height) {
		this.ball.style.width = width + 'px';
		this.ball.style.height = height + 'px';
	};

	
	this.getPosition = function() {
		return {
			x: parseInt(this.ball.style.top),
			y: parseInt(this.ball.style.left)
		};
	};

	
	this.setPosition = function(x, y) {
		this.ball.style.top = x + 'px';
		this.ball.style.left = y + 'px';
	};

	
	this.move = function() {
		this.isDeleteable = true;
		var movement = Math.ceil(Math.random() * 4);
		this.interval = setInterval(function() {
			var currentTop = parseInt(that.ball.style.top);
			var nextTop = currentTop + movement;
			that.ball.style.top = nextTop + 'px';
		}, 1000/60 );
	};

	//To remove balls after movement
	this.remove = function() {
		document.body.removeChild(that.ball);
		clearInterval(that.intervalId);
		this.isDeleted = true;
	};
}