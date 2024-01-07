var UserProfile = (function () {
    var username = "";
    var email = "";
    var id = 0;
    var type = 0;

    var getUsername = function () {
        return username;
    };

    var getEmail = function () {
        return email;
    }

    var getId = function () {
        return id;
    }

    var getType = function () {
        return type;
    }

    var setUsername = function (name) {
        username = name;
    };

    var setEmail = function (mail) {
        email = mail;
    }

    var setId = function (idUser) {
        id = idUser;
    }

    var setType = function (userType) {
        type = userType;
    }

    var setProfile = function (name, mail, idUser, userType) {
        username = name;
        email = mail;
        id = idUser;
        type = userType;
    }

    var saveToCookies = function () {
        
        var expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1); 

        document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + expirationDate.toUTCString() + "; path=/";
        document.cookie = "email=" + encodeURIComponent(email) + "; expires=" + expirationDate.toUTCString() + "; path=/";
        document.cookie = "id=" + id + "; expires=" + expirationDate.toUTCString() + "; path=/";
        document.cookie = "type=" + type + "; expires=" + expirationDate.toUTCString() + "; path=/";
    };

    var loadFromCookies = function () {
        var cookies = document.cookie.split('; ');

        cookies.forEach(function (cookie) {
            var parts = cookie.split('=');
            var name = parts[0];
            var value = decodeURIComponent(parts[1]);

            switch (name) {
                case 'username':
                    username = value;
                    break;
                case 'email':
                    email = value;
                    break;
                case 'id':
                    id = parseInt(value, 10);
                    break;
                case 'type':
                    type = parseInt(value, 10);
                    break;
            }
        });
    };

    // Se inicializa cargando las cookies
    loadFromCookies();

    var deleteCookies = function () {
        var cookies = document.cookie.split('; ');

        cookies.forEach(function (cookie) {
            var parts = cookie.split('=');
            var name = parts[0];

            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        });

        username = "";
        email = "";
        id = 0;
        type = 0;
    };

    
    return {
        getUsername: getUsername,
        setUsername: setUsername,
        getEmail: getEmail,
        setEmail: setEmail,
        getId: getId,
        setId: setId,
        getType: getType,
        setType: setType,
        setProfile: setProfile,
        saveToCookies: saveToCookies,
        loadFromCookies: loadFromCookies,
        deleteCookies: deleteCookies
    }

})();

export default UserProfile;