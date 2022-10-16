void main(){

//Q.1: Create two integer variables length and breadth and assign values then check 
//if they are square values or rectangle values.ie: if both values are equal then 
//it's square otherwise rectangle.

int length = 10;
int breadth = 10;
if(length == breadth) {
  print("Square values");
}
else{
  print("Rectangle values");
}

//Q.2: Take two of age of 3 people by user and determine oldest and youngest among them.
  
int person1 = 25;
int person2 = 25;
int person3 = 30;
if(person1 > person2 && person1 > person3){
  if(person2 > person3){
    print("person1 is oldest, person3 is youngest");
  }
  else{
    print("person1 is oldest, person2 is youngest");
  }
}
else if(person2 > person1 && person2 > person3){
  if(person1 > person3){
    print("person2 is oldest, person3 is youngest");
  }
  else{
    print("person2 is oldest, person1 is youngest");
  }
}
else if(person3 > person1 && person3 > person2){
  if(person1 > person2){
    print("person3 is oldest, person2 is youngest");
  }
  else{
    print("person3 is oldest, person1 is youngest");
  }
}

//Q.3: A student will not be allowed to sit in exam if his/her attendence is 
//less than 75%. Create integer variables and assign value:
//Number of classes held = 16,
//Number of classes attended = 10,
//and print percentage of class attended.
//Is student is allowed to sit in exam or not?

int num1 = 16;
int num2 = 10;
double percentage = (num2 / num1) * 100;
print("Percentage of Class Attended $percentage%");
if(percentage < 75){
  print("Not Allowed");
}
  else{
    print("Allowed");
  }

//Q.4: Create integer variable assign any year to it and check if a year is leap year or not.
//If a year is divisible by 4 then it is leap year but if the year is century year like 2000, 1900, 2100 then it must be divisible by 400.
//i.e: Use % ( modulus ) operator.
  
  int year = 2016;
  if((year % 4) == 0 || (year % 400) == 0){
    print("$year is a leap year");
  }
  else{
    print("$year is not a Leap year");
  }
  
//Q.5  Write a program to read temperature in centigrade and display a suitable message 
//according to temperature:
  
  num temp = -1;
  if(temp >= 40){
    print("Its Very Hot");
  }
  else if(temp >= 30 && temp < 40){
    print("Its Hot");
  }
  else if(temp >= 20 && temp < 30){
    print("Normal in Temp");
  }
  else if(temp >= 10 && temp < 20){
    print("Cold Weather");
  }
  else if(temp >= 0 && temp < 10){
    print("Very Cold Weather");
  }
  else if(temp < 0){
    print("Freezing Cold");
  }
 
  //Q.6: Write a program to check whether an alphabet is a vowel or consonant.
  
  String char = "b";
  if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
    print("Its a vowel");
  }
  else{
    print("A Consonant");
  }
  
  //Q.7: Write a program to calculate and print the Electricity bill of a 
  //given customer. Create variable for customer id, name, unit consumed by the 
  //user, bill_amount and print the total amount the customer needs to pay.
  
  int customer_id = 1001;
  String customer_name = "James";
  int units = 800;
  double charges = 0;
  if(units >= 600){
    charges = 2;
  }
  else if(units >= 400 && units < 600){
    charges = 1.80;
  }
  else if(units >= 200 && units < 400){
    charges = 1.50;
  }
  else{
    charges = 1.20;
  }
  double amount = units * charges;
  print("Customer ID NO: $customer_id");
  print("Customer Name: $customer_name");
  print("Units Consumed: $units");
  print("Amount Charges @$charges per unit: Rs. $amount");
  
}