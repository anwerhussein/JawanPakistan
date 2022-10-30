void main(){
  //Q.1: Create a list of names and print all names using list.
  List<String> names = ["Anwer", "Saniya", "Ebrahim", "Mahrosh"];
  print(names);
  
  //Q.2: Create an empty list of type string called days. Use the add method to 
  //add names of 7 days and print all days.
  
  List<String> days = [];
    days.add("Monday");
    days.add("Tuesday");
    days.add("Wednesday");
    days.add("Thursday");
    days.add("Friday");
    days.add("Saturday");
    days.add("Sunday");
  print(days);
  
  //Q3.Add your 7 friend names to the list. Use where to find a day name that 
    //starts with alphabet a.
  
  List<String> friends = ["Umair", "Talha", "Ahmer", "Marium", "Azfar","Rehman", "Arsalan"];
  var result = friends.where((x) => x[0].startsWith("A"));
  print(result);
  
  //Q.4 Create a map with name, address, age, country keys and store values to it. 
  //Update country name to other country and print all keys and values.
  
  Map myData = {
    "name": "Anwer Hussain",
    "address": "D-26 Shah Faisal Town",
    "age": 35,
    "country": "Pakistan",
  };
  myData['country'] = "Australia";
  print(myData);
  
  //Q.6: Create Map variable name world then inside it create countries Map 
  //(dart Map) and using key, value pair assign country, capitalCity, currency 
  //and language to it. Search for ".forEach()" mehtod and using it print all the 
  //value of world variable
  
  Map world = {
    'country1' : {
      'name' : "Pakistan",
      'capital' : "Islamabad",
      'currency': "Rupee",
      'language': "Urdu",
    },
    'country2' : {
      'name' : "America",
      'capital' : "Washington",
      'currency': "Dollar",
      'language': "English",
    },
    'country3' : {
      'name' : "Saudia Arabia",
      'capital' : "Riyaz",
      'currency': "Riyal",
      'language': "Arabic",
    }
  };
  world.forEach((key,value){
    print('$key, $value');
  });
  
  //Q7. Using ".removeWhere()" method remove key, value where value <= 30 
  //then print the updated map mathMarks variable.
  
  Map<String, double> mathMarks = {
  'ram': 30,
  'mark': 32,
  'harry': 88,
  'raj': 69,
  'john': 15,
};
  mathMarks.removeWhere((key, value) => value <= 30);
  print(mathMarks);
  
  
  //Q.8: Check if "fri" exist in expanses; if exist change it's 
  //value to 5000.0 otherwise add 'fri' to expenses and set its value to 5000.0 then print expenses.
  
  Map<String, double> expenses = {
  'sun': 3000.0,
  'mon': 3000.0,
  'tue': 3234.0,
  };
  expenses.forEach((key,value){
   if(key == "fri"){
     print("fri key is not Existed");
   }
  });
  expenses.addAll({'fri': 5000.0});
  print(expenses);

}