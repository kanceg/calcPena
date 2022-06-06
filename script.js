let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            
            default:
                display.innerText += e.target.innerText;
              
        
        }
        
    });
});
//Больше половины ТЗ не выполнено, но это не связанно с малым количеством времени, с ограниченым запасом теоретических и практических знаний на данный момент. 
//Изучение JS проходит в довольно медленном темпе, так как нет возможности уделять много времени в связи с постоянной работой.
//Но я на самом деле рад, что попробовал сделать что-то подобное и оно не рзлетается по всему экрану.