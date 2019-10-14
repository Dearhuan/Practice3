const sign = ({
  username,
  password
}) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://localhost:3000/login',
      type: 'POST',
      data: {
        username,
        password
      },
      success(data) {
        console.log(data)
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}
$('#sign').click(async () => {
  let username = $('#inputUsername').val();
  let password = $('#inputPassword').val();
  let data = await sign({
    username,
    password
  })
  switch (data.status) {
    case 0:
      break;
    case 1:
      location.href = 'https://www.baidu.com'
  }
  // console.log(data)
})