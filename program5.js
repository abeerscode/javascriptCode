const apiResponse = `
{
  "success": true,

  "courses": [

    {
      "title": "JavaScript Basics",
      "students": 1200,
      "topics": ["Variables", "Loops", "Functions"]
    },

    {
      "title": "C++ Advanced",
      "students": 800,
      "topics": ["Pointers", "OOP", "STL"]
    }

  ]
}
`;

//Convert the JSON into JavaScript object.

/*const data = JSON.parse(apiResponse);
console.log(data);*/

const data = Response.json(apiResponse);
console.log(data);

// Convert this object into JSON:

const newCourse = {
  title: "Python Mastery",
  students: 2000,
};

const jsonData = JSON.stringify(newCourse);
console.log(jsonData);
