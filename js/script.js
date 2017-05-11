document.querySelectorAll("input").forEach(function(item) {
  item.addEventListener("blur",function() {
    console.log(this.value);
    if (this.value.length) {
      this.classList.add("active");
    } else {
      this.classList.remove("active");
    }
  });
})