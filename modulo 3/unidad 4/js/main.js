
      function cambiarFondo(color) {
        var body = document.getElementById("body")
            body.style.backgroundColor = color
      };


      var alumnos = [

        {
      
          nombre: 'Juan Gomez',
      
          nota: 7
      
        }, {
      
          nombre: 'Pedro Rodriguez',
      
          nota: 4
      
        }, {
      
          nombre: 'Roxana García',
      
          nota: 8
      
        }, {
      
          nombre: 'Luciano Lopez',
      
          nota: 5
      
        }, {
      
          nombre: 'Fernanda Gimenez',
      
          nota: 6
      
        }, {
      
          nombre: 'Florencia Martinez',
      
          nota: 10
      
        }, {
      
          nombre: 'Raul Sanchez',
      
          nota: 7
      
        }, {
      
          nombre: 'Sandra Figueroa',
      
          nota: 8
      
        }
      
      ];

      function principal(){
        var texto = document.getElementById('texto')
        var contador = document.getElementById('contador')
        texto.addEventListener('keyup', function(){
          contador.innerText = texto.value.length
        })
        
        var aprobados = alumnos.filter( alumno => alumno.nota >= 7)
        for (const alumno of aprobados) {
          console.log(alumno.nombre +' Aprobado con: '+alumno.nota)
        }
      }