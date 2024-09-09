



export  function getExerciseData(url: string) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        // console.log('response for json data from getExerciseData ');
        // console.log(response.json());
        return response.json()
      })
  }


// export function getExerciseData<T>(url: string): Promise<T> {
//     return fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(response.statusText)
//         }
//         // console.log('response for json data from getExerciseData ');
//         // console.log(response.json());
//         return response.json() as Promise<T>
//       })
//   }