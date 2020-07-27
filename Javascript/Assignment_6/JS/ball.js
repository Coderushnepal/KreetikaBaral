function Ball() {
	this.isDeleteable = false;
	this.isDeleted = false;
	var that = this;
	// console.log(that)
	

	//creating balls
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

	this.setDimension = function(width, height) {        // animate bata call bhachha
		this.ball.style.width = width + 'px';
		this.ball.style.height = height + 'px';
	};

	
	this.getPosition = function() {                      //object return gariraachha
		return {
			x: parseInt(this.ball.style.top),
			y: parseInt(this.ball.style.left)
		};
	};

	
	this.setPosition = function(x, y) {               // animate bata call bhachha
		this.ball.style.top = x + 'px';
		this.ball.style.left = y + 'px';
	};

	//ball move garna ko lagi
	this.move = function() {
		this.isDeleteable = true;
		var movement = Math.ceil(Math.random() * 5);
		this.interval = setInterval(function() {
			var currentTop = parseInt(that.ball.style.top);
			var nextTop = currentTop + movement;
			that.ball.style.top = nextTop + 'px';
		}, 1000/60 );
	};

	//To remove balls after movement -- calling remove function
	this.remove = function() {
		document.body.removeChild(this.ball);
		clearInterval(this.intervalId);               //ball ma bhako interval lai clear garchha
		this.isDeleted = true;
	};
}