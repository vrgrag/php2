 <?php
 function square_sum($numbers) : int {
    $sum = 0;  // создание перменной 
  
    foreach ($numbers as $a) {  //переберием каждый элемент и записываем в а 
        $sum += pow($a, 2);    //возводим в степень и прибавляем к sum
    }
    return $sum;   //возварт 
}
