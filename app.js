const conteiner = document.querySelector('#conteiner');

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    console.log(products);
    products.forEach(product=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('bg-white','p-4','rounded-lg','shadow','hover:shadow-md','transition','duration-300','cursor-pointer');

        let newTitle = document.createElement('h2');
        newTitle.classList.add('text-lg','font-semibold','mb-2');

        let newImage = document.createElement('img');
        newImage.classList.add('w-full','h-48','object-contain','mb-2');

        let newDiscription = document.createElement('p');

        let newPrice = document.createElement('p');
        newPrice.classList.add('text-xl','font-bold','text-gray-800');

        let rating = product.rating.rate;
        
        console.log(Math.round(rating));

        newTitle.textContent = product.title;
        newImage.src = product.image;
        newDiscription.textContent = product.discription;
        newPrice.textContent = product.price;
        newDiv.append(newTitle,newImage,newDiscription,newPrice);
        conteiner.append(newDiv);

    });
  });