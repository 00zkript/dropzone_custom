const dropzone = document.querySelector('.dropzone');
const title = dropzone.querySelector('.dropzone__title');
const btn = dropzone.querySelector('.dropzone__btn');
const inputFile = dropzone.querySelector('input[type=file]');

dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add('hover');
});


dropzone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropzone.classList.remove('hover');
});

dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    showFile(files);
    dropzone.classList.remove('hover');
})


function showFile(files) {
    [...files].forEach((file) => {

        let fileType = file.type;
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 

        if (!validExtensions.includes(fileType)) { 
            alert("This is not an Image File!");
            dropzone.classList.remove("hover");
            dragText.textContent = "Drag & Drop to Upload File";
        }


        const fileReader = new FileReader();
        fileReader.onload = () => {

            const fileURL = fileReader.result;
            const image = document.createElement("img");

            image.src = fileURL;
            image.setAttribute("width", "150px");
            image.setAttribute("height", "150px");

            document.querySelector(".dropzone__preview").appendChild(image);
        };

        fileReader.readAsDataURL(file);

    });
}
