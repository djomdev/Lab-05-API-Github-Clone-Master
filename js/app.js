var request = superagent;
var search = document.querySelector('.box__nav-search');
var input = document.querySelector('.box__nav-input');
var body = document.querySelector('.box__container');
var API_BASE = 'https://api.github.com/users/'; //+ userInput + token
var repos = '/repos';
var token = '?access_token=';
var ENDPOINT = "";
var reposContainer = document.querySelector('.repos');


input.addEventListener('keydown', function(e){
    var enter = 13;
    if(e.keyCode === enter){
        var usernameInput = e.target.value;
        ENDPOINT = API_BASE + usernameInput + token + access;
        // console.log(ENDPOINT);
    request
        .get(ENDPOINT)
        .then(function (response){
            var photoProfile = response.body.avatar_url;
            var username = response.body.name;
            var userLogin = response.body.login;
            var companyName = response.body.company;
            var location = response.body.location;
            var email = response.body.email;
            var website = response.body.blog;

                var picture = document.querySelector('.box__info-photo');
                picture.outerHTML = "<img class='box__info-photo' src='" + photoProfile + "' />";

                var fullname = document.querySelector('.box__info-name');
                fullname.textContent = username; 

                var login = document.querySelector('.box__info-login');
                login.textContent = userLogin;

                var company = document.querySelector('.box__info-company');
                company.textContent = companyName;

                var locationX = document.querySelector('.box__info-location');
                locationX.textContent = location;

                var emailX = document.querySelector('.box__info-email');
                emailX.textContent =  email;

                var websiteX = document.querySelector('.box__info-website');
                websiteX.textContent = website; 

            var ENDPOINT_REPO = response.body.repos_url;

            request
                .get(ENDPOINT_REPO)
                // console.log(response.body.repos_url)  
                .then(function (response){
                    var repoInfo = response.body;
                    reposContainer.innerHTML = "";

                    repoInfo.forEach(function (data){
                        var reposName = data.name;
                        var repoDescription = data.description;
                        var repoLang = data.language;
                        var repoFork = data.fork;
                        var repoDate = data.updated_at;

                        var span = document.createElement('span');
                        span.setAttribute('class', 'repos__span');

                        var h3 = document.createElement('h3');
                        h3.setAttribute('class', 'repos__span-title');
                        h3.textContent = reposName;
                        span.appendChild(h3);

                        var pDesc = document.createElement('p');
                        pDesc.setAttribute('class', 'repos__span-desc');
                        pDesc.textContent = repoDescription;
                        span.appendChild(pDesc);

                        var pLang = document.createElement('p');
                        pLang.setAttribute('class', 'repos__div-details--lang');
                        pLang.textContent = repoLang;
                        span.appendChild(pLang);

                        var pFork = document.createElement('p');
                        pFork.setAttribute('class', 'repos__div-details--fork');
                        pFork.textContent = repoFork;
                        span.appendChild(pFork);

                        var time = document.createElement('time');
                        time.setAttribute('class', 'repos__div-details--date');
                        time.textContent = 'Updated on: ' + repoDate;
                        span.appendChild(time);
                        
                        reposContainer.appendChild(span);

                        // request
                        //     .get(repoInfo)
                        //         .then(function (e){
                        //            var allRepos = e.body;
                        //            var reposContainer = document.querySelector('.repos');
                        //            reposContainer.innetHTML = "";
                        //            allRepos.forEach(function (repo){
                        //             var name = repo.name;
                        //             var description = repo.description;
                        //             var lang = repo.language;
                        //             var fork = repo.fork;
                        //             var date = repo.updated_at;

                        //                 var span = document.createElement('span'); // ;
                        //                 span.setAttribute('class', 'repos__span');

                        //                 var h3 = document.createElement('h3');
                        //                 h3.setAttribute('class', 'repos__span-title');
                        //                 h3.textContent = name;
                        //                 span.appendChild(h3);

                        //                 var pDesc = document.createElement('p');
                        //                 pDesc.setAttribute('class', 'repos__span-desc');
                        //                 pDesc.textContent = description;
                        //                 span.appendChild(pDesc);

                        //                 var pLang = document.createElement('p');
                        //                 pLang.setAttribute('class', 'repos__div-details--lang');
                        //                 pLang.textContent = lang;
                        //                 span.appendChild(pLang);

                                        // var pFork = document.createElement('p');
                                        // pFork.setAttribute('class', 'repos__div-details--fork');
                                        // pFork.textContent = fork;
                                        // span.appendChild(pFork);

                        //                 var time = document.createElement('time');
                        //                 time.setAttribute('class', 'repos__div-details--date');
                        //                 time.textContent = date;
                        //                 span.appendChild(time);

                        //                

                        //            })
                        //         })
                    
                    });
            })    
 
        });        
    }
});







        // .then(createSetElemetsLeftBox);



// when submitting info in the input box all userinfo should appear bellow

