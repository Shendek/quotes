document.addEventListener('click',function(){
	const el = event.target;
	if(el.classList.contains("change_color")){
		const body = document.querySelector('body');
		const theme = body.classList[0];
		if(theme === 'dark'){
			body.classList.remove('dark');
			body.classList.add('light');
		}else if(theme === 'light'){
			body.classList.add('dark');
			body.classList.remove('light');
		}
	}

	if(el.classList.contains("refresh")){
		getQuotes();
	}
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


displayQuote = (data)=>{
	const total_records = data.length;
	const min = 0;
	const max = total_records;
	let i = 0;
	const quote = [];
	for ( i ; i < 5; i++) {
		const rand = Math.ceil(Math.random() * (max - min) + min);
		quote.push(data[rand]);
	}
	const div = document.querySelectorAll(".application > div");
	for (var a = 0; a <= div.length - 1; a++) {
		const quote_single = quote[a] ;
		const div_to_display = div[a];
		const author = quote_single.author;
		let person;
		if(author !== null){
			person = "--"+author;
		}else{
			person = "anonymous";
		}
		const text = quote_single.text;
		const layout = `<blockquote class="quote_wrapper">
										  <div>${text}</div>
											<span>${person}</span>
									 </blockquote>`;
		div_to_display.innerHTML = layout;
	}
}

function getQuotes(){
	const api_url = "https://type.fit/api/quotes";
	fetch(api_url).then((res)=>{
		return res.json();
	}).then((data)=>{
		displayQuote(data);
	})
}

document.addEventListener("DOMContentLoaded",function(){
	getQuotes();
})