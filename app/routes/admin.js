module.exports = function(application){
    application.get("/noticia/new", function(req, res){
        res.render("admin/form_add_noticia");
    });


    application.post("/noticia/salvar", function(req, res){
        var noticia = req.body;

        // recuperar conexao
        var connection = application.config.dbConnection();

        // recuperar model
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            // res.render("noticias/noticias", {noticias: result});
            res.redirect('/noticias');
        }); 
        
    });
}
