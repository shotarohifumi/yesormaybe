$(function () {
    $(".btn").on("click", function () {


        $.ajax({
            url: 'https://yesno.wtf/api', //アクセスするURL
            type: 'get',//post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'json',     //data type script・xmlDocument・jsonなど
            // data: data,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                //成功したとき実行したいスクリプトを記載
                console.log(response);
                console.log(response.answer);
                console.log(response.image);
                // $(".image").on("click",function () {
                    // $(".image").append(`<img src=${response.image}  alt="yesorno">`)
                    // $(".image").append(`<p>${response.answer}</p>`)
                    $('.yesorno').css('background-image', `url(${response.image})`);
                    $('.yesorno').text(response.answer)
                    // $(".yesorno").append(`<p>${response.answer}</p>`)
                    $(".yesorno").animate({"fontSize":"30px"},)
                    $(".yesorno").animate({"opacity":"1"},)
                    $(".yesorno").append(`<button>${response.answer}</button>`)

				


				// })

			})
			.fail(function (xhr) {
				//通信失敗時の処理
				//失敗したときに実行したいスクリプトを記載
				setTimeout(() => {
					
				}, 3000);
			})
			.always(function (xhr, msg) {
				//通信完了時の処理
				//結果に関わらず実行したいスクリプトを記載
			});
	})
})