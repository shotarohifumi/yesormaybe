$(function () {
    $(".btn-s1").on("click", function () {

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
                    // イエスかノーの画像流れる
                    
                    $('.yesorno_s1').css('background-image', `url(${response.image})`);
                    $('.yesorno-a').text(response.answer)
                    // $(".yesorno").append(`<p>${response.answer}</p>`)
                    $(".yesorno_s1").animate({"fontSize":"50px"},2000)
                    $(".yesorno_s1").animate({"opacity":"1"},)
                    $('.yesorno-a').css({"backgroundColor":"white"})
                    // $(".yesorno").append(`<button>${response.answer}</button>`)
                    
                    //右側のなんかする？を消す
                    $('.btn-text').remove()
                    $('.btn.q').remove()

                    // yes　or no のanswerに対してのクリックイベントを開催
                    $('.yesorno-a').on("mouseover",function () {
                        $('.yesorno-a').css({"cursor":"pointer"})
                        // $('.yesorno-a').css({"backgroundColor":"white"})

                        $('.yesorno-a').on("click",function () {
                            // $(`.${response.answer}`).addClass("on")
                            $(this).siblings(`.${response.answer}`).addClass("on")
                            $('.yesorno-a').remove()

                            

                        })

                        

                    })
				


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

    $(".btn-s2").on("click", function () {

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
                    // イエスかノーの画像流れる
                    
                    $('.yesorno_s2').css('background-image', `url(${response.image})`);
                    $('.yesorno-a').text(response.answer)
                    // $(".yesorno").append(`<p>${response.answer}</p>`)
                    $(".yesorno_s2").animate({"fontSize":"50px"},2000)
                    $(".yesorno_s2").animate({"opacity":"1"},)
                    $('.yesorno-a').css({"backgroundColor":"white"})
                    // $(".yesorno").append(`<button>${response.answer}</button>`)
                    
                    //右側のなんかする？を消す
                    $('.btn-text').remove()
                    $('.btn.q').remove()

                    // yes　or no のanswerに対してのクリックイベントを開催
                    $('.yesorno-a').on("mouseover",function () {
                        $('.yesorno-a').css({"cursor":"pointer"})
                        // $('.yesorno-a').css({"backgroundColor":"white"})

                        $('.yesorno-a').on("click",function () {
                            // $(`.${response.answer}`).addClass("on")
                            $(this).siblings(`.${response.answer}`).addClass("on")
                            $('.yesorno-a').remove()

                            

                        })

                        

                    })
				


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

    $(".btn-s3").on("click", function () {

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
                    // イエスかノーの画像流れる
                    
                    $('.yesorno_s3').css('background-image', `url(${response.image})`);
                    $('.yesorno-a').text(response.answer)
                    // $(".yesorno").append(`<p>${response.answer}</p>`)
                    $(".yesorno_s3").animate({"fontSize":"50px"},2000)
                    $(".yesorno_s3").animate({"opacity":"1"},)
                    $('.yesorno-a').css({"backgroundColor":"white"})
                    // $(".yesorno").append(`<button>${response.answer}</button>`)
                    
                    //右側のなんかする？を消す
                    $('.btn-text').remove()
                    $('.btn.q').remove()

                    // yes　or no のanswerに対してのクリックイベントを開催
                    $('.yesorno-a').on("mouseover",function () {
                        $('.yesorno-a').css({"cursor":"pointer"})
                        // $('.yesorno-a').css({"backgroundColor":"white"})

                        $('.yesorno-a').on("click",function () {
                            // $(`.${response.answer}`).addClass("on")
                            $(this).siblings(`.${response.answer}`).addClass("on")
                            $('.yesorno-a').remove()

                            

                        })

                        

                    })
				


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