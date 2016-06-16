/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
        /* listitem  Calendário */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_page */
         activate_page("#Calendario"); 
    });
    
        /* listitem  CRM */
    $(document).on("click", ".uib_w_13", function(evt)
    {
         /*global activate_page */
         activate_page("#CRM"); 
    });
    
        /* graphic button  Culto */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#culto"); 
    });
    
        /* graphic button  Lavanderia */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#Lavanderia"); 
    });
    
        /* graphic button  Renovação */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#Renovacao"); 
    });
    
        /* graphic button  Calendário */
    $(document).on("click", ".uib_w_10", function(evt)
    {
         /*global activate_page */
         activate_page("#Calendario"); 
    });
    
        /* graphic button  CRM */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_page */
         activate_page("#CRM"); 
    });
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
        /* graphic button  #lavanderia */
    $(document).on("click", "#lavanderia", function(evt)
    {
         /*global activate_page */
         activate_page("#Lavanderia"); 
    });
    
        /* graphic button  CRM */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_page */
         activate_page("#CRM"); 
    });
    
       
    
        /* button  LOGIN 
    $(document).on("click", ".uib_w_5", function(evt)
    {
         global activate_page 
         activate_page("#principal"); 
    });
     */
      
    
    
        /* graphic button  #culto */
    $(document).on("click", "#culto", function(evt)
    {
         /*global activate_page */
         activate_page("#Culto"); 
    });
    
        /* button  Voltar */
    
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_page */
         activate_page("#main-menu"); 
    });
    

    
    
        /* graphic button  #lavanderia */
    $(document).on("click", "#lavanderia", function(evt)
    {
         /*global activate_page */
         activate_page("#Lavanderia"); 
    });
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_page */
         activate_page("#main-menu"); 
    });
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_page */
         activate_page("#main-menu"); 
    });
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_24", function(evt)
    {
         /*global activate_page */
         activate_page("#main-menu"); 
    });
    
        /* graphic button  #renovacao */
    $(document).on("click", "#renovacao", function(evt)
    {
         /*global activate_page */
         activate_page("#main-menu"); 
    });
    
        /* graphic button  #renovacao */
    $(document).on("click", "#renovacao", function(evt)
    {
         /*global activate_page */
         activate_page("#Renovacao"); 
    });
    
        /* graphic button  #calendario */
    $(document).on("click", "#calendario", function(evt)
    {
         /*global activate_page */
         activate_page("#Calendario"); 
    });
    
        /* graphic button  #culto */
    $(document).on("click", "#culto", function(evt)
    {
         /*global activate_page */
         activate_page("#Culto"); 
    });
    
        /* graphic button  #lavanderia */
    $(document).on("click", "#lavanderia", function(evt)
    {
         /*global activate_page */
         activate_page("#Lavanderia"); 
    });
    
        /* button  #saida-voltar */
    $(document).on("click", "#saida-voltar", function(evt)
    {
         /*global activate_page */
         activate_page("#Calendario"); 
    });
    
        
    $(document).on("click", "#fazersaida", function(evt)
    {
         /*global activate_page */
         activate_page("#main-menu"); 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_42", function(evt)
    {
         /*global activate_page */
         activate_page("#main-menu"); 
    });
    
    
        /* graphic button  #saida */
    $(document).on("click", "#saida", function(evt)
    {
         /*global activate_page */
         activate_page("#Saida"); 
    });
    
        
    $(document).on("click", "#voltar", function(evt)
    {
         /*global activate_page */
         activate_page("#main-menu"); 
    });
    
        /* button  #btm-saida-voltar */
    $(document).on("click", "#btm-saida-voltar", function(evt)
    {
         /*global activate_page */
         activate_page("#main-menu"); 
         return false;
    });
    
        /* button  #loginbtn */
    
    
        /* button  #loginbtn */
    $(document).on("click", "#loginbtn", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #btn-menu-culto */
    $(document).on("click", "#btn-menu-culto", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#slide-lateral"));  
         return false;
    });
    
        /* button  #btn-slide-culto-vlt */
    
    
        /* button  #btn-slide-culto-vlt */
    $(document).on("click", "#btn-slide-culto-vlt", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#slide-lateral"));  
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
