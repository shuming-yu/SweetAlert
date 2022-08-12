// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!",
// }).then((result) => {

//   console.log(result);

//   if (result.isConfirmed) {
//     Swal.fire(
//       // "Deleted!",
//       // "Your file has been deleted.",
//       // "success"
//       {
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success"
//       }
//     );
//   }
// });


// input-types : https://sweetalert2.github.io/#input-types

Swal.fire({
  icon: 'info',
  title: '請填寫文字內容',
  input: 'text'
}).then((result) => {
  // console.log(result);
  // console.log(result.value);
  Swal.fire({
    icon: 'success',
    title: '新增內容成功',
    text: result.value
  })
})