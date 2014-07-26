$(document).ready(function() {
    var gamesList = {};
    $('#gamesTable tbody tr').each(function(index, val) {

        var gameInfo = {
            title: $(this).find('td:nth-child(2) a').text().trim(),
            progress: $(this).find('.progress_outer').text().trim(),
            image: $(this).find('.trophy_image').attr('src'),
            trophies: {
                achieved: $(this).find('.small_info b').eq(0).text().trim(),
                total: $(this).find('.small_info b').eq(1).text().trim(),
                gold: $(this).find('.trophy_count li').eq(0).text().trim(),
                silver: $(this).find('.trophy_count li').eq(1).text().trim(),
                bronze: $(this).find('.trophy_count li').eq(2).text().trim()
            }
        };
        gamesList[index] = gameInfo;
    });

    setTimeout(function() {
        $.ajax({
            type: 'post',
            url: 'post.php',
            data: gamesList,
            success: function(resp) {
                $('#progress').html(resp);
            }
        })
    },5000);
});