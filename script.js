$(function () {
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
        })
        .fail(function (xhr) {
            //通信失敗時の処理
            //失敗したときに実行したいスクリプトを記載
        })
        .always(function (xhr, msg) {
            //通信完了時の処理
            //結果に関わらず実行したいスクリプトを記載
        });
})