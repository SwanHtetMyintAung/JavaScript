//this code is extended version of a code in my project , im posting this just in case i forget how it works in the future

            if(icon === event.target){
                console.log('do nothing')
            }else if(!menuRef.current.contains(event.target)){
                console.log('menu is closed');
                toggleNav('toggle-menu',false)
            }else{
                console.log('in the menu')
            }
