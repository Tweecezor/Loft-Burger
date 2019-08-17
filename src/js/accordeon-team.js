
(function(){    
    //Акордеон меню Наша команда
const team = document.querySelector('.team__list'),
team_item = document.querySelectorAll('.personal'),
personal = document.querySelectorAll('.personal__name'),
team_length = team_item.length;
team.addEventListener('click',function(){
for(let i =0;i<team_length;i++){
  team_item[i].classList.remove('personal--active');
}
for(let i = 0; i<team_length; i++){
  personal[i].addEventListener('click',function(e){
      e.stopPropagation();
      e.preventDefault();
      if(team_item[i].classList.contains('personal--active')){
          team_item[i].classList.remove('personal--active');
      } else{
          for(let i =0; i< team_length;i++){
              team_item[i].classList.remove('personal--active');
          }
          team_item[i].classList.add('personal--active');
      }
  })
}
})
})();

