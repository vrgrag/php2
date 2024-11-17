function enough($cap, $on, $wait) {
  $x = $cap-$on-$wait;
  if($x<0){ //Проверка условия 
   return(ABS($x)); //Возврат при отрицательной разнице
  }
  
    else{

return 0; //возврат нуля при отрицательной разнице
}
}