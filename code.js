document.addEventListener('DOMContentLoaded', function(){
    const list=document.querySelector(' #movielist ul');
    const forms=document.forms;

    list.addEventListener('click' ,(e)=>{
        if(e.target.className == 'delete'){
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);

            
                
            }
        });
        const addForm = forms['addmovie'];
        addForm.addEventListener('submit', function(e){
            e.preventDefault();

            const value = addForm.querySelector('input[type="text"]').value;
            const li = document.createElement('li');
            const movieName = document.createElement('span');
            const deleteBtn= document.createElement('span');

            movieName.innerHTML = value;
            deleteBtn.innerHTML = 'delete';

            movieName.classList.add('name');
            deleteBtn.classList.add('delete');

            li.appendChild(movieName);
            li.appendChild(deleteBtn);
            list.appendChild(li);

            addForm.querySelector('input[type="text"]').value=""
            
    
        });
        

    })
