class ProgressCircle {
    constructor(container, circle, fill) {
        this.progressContainer = container;
        this.progressCircle = circle;
        this.progressFill = fill;
        this.animationInterval = null;
    }

    getCircumference() {
        const radius = this.progressCircle.r.baseVal.value;
        return 2 * Math.PI * radius;
    }

    updateProgress(value) {
        const circumference = this.getCircumference();
        const offset = circumference - (value / 100) * circumference;
        this.progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        this.progressCircle.style.strokeDashoffset = offset;
    }

    animateProgress(isAnimating) {
        if (isAnimating) {
            this.startAnimationInterval();
        } else {
            this.stopAnimationInterval();
        }
    }

    startAnimationInterval() {
        this.animationInterval = setInterval(() => {
            let currentRotation =
                parseFloat(this.progressFill.style.transform.replace("rotate(", "").replace("deg)", "")) || 270;
            if (currentRotation == 360) {
                currentRotation = 0;
            }
            this.progressFill.style.transform = `rotate(${currentRotation + 1}deg)`;
        }, 10);
    }

    stopAnimationInterval() {
        clearInterval(this.animationInterval);
        this.progressFill.style.transform = "rotate(270deg)";
    }

    hideProgress(isHidden) {
        this.progressContainer.style.opacity = isHidden ? "0" : "1";
    }

    setProgress(value) {
        this.updateProgress(value);
    }

    startAnimation() {
        this.animateProgress(true);
    }

    stopAnimation() {
        this.animateProgress(false);
    }

    show() {
        this.hideProgress(false);
    }

    hide() {
        this.hideProgress(true);
    }
}

export default ProgressCircle;
