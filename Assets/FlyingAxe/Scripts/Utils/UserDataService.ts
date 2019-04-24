namespace game {

    /**
     * Save and load player data into web cookies.
     */
    export class UserDataService {

        static getBestScore(): number {
            let cookieName = "BestScore";
            let value = this.getCookie(cookieName);
            if (value) {
                return Number(value);
            } else {
                return 0;
            }
        }

        static setBestScore(score: number): void {
            let cookieName = "BestScore";
            this.setCookie(cookieName, String(score));
        }
        
        static getIsSoundOn(): boolean {
            let cookieName = "Sound";
            let value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            } else {
                return true;
            }
        }

        static setIsSoundOn(isSoundOn: boolean): void {
            let cookieName = "Sound";
            this.setCookie(cookieName, String(isSoundOn ? 1 : 0));
        }

        static getIsMusicOn(): boolean {
            let cookieName = "Music";
            let value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            } else {
                return true;
            }
        }

        static setIsMusicOn(isMusicOn: boolean): void {
            let cookieName = "Music";
            this.setCookie(cookieName, String(isMusicOn ? 1 : 0));
        }

        static getCookie(name: string) {
            const value = "; " + document.cookie;
            const parts = value.split("; " + name + "=");
            if (parts.length == 2) {
                return parts.pop().split(";").shift();
            }
        }

        static setCookie(name: string, val: string) {
            const date = new Date();
            const value = val;
            date.setTime(date.getTime() + (1000 * 24 * 60 * 60 * 1000));
            document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
        }

        static deleteCookie(name: string) {
            const date = new Date();
            date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
            document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
        }

        static deleteAllCookies() {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }
    }
}
