import Page from './page';

/**
 * Login Page - URL - {baseUrl}
 * Add all relevant Webelements related to Landing Page in this Class
 */
class LandingPage extends Page {
    /**
     * Page Logo
     */
    get navLogo() {
        return $("");
    }

    open() {
        return super.open('/');
    }

    /**
     * Text field for the center text title
     */
    get txtCenterText() {
        return $('#center-text');
    }

    /**
     * Button to reset the object position
     */
    get btnResetPosition() {
        return $('#reset');
    }
    /**
     * Button to take a screenshot
     */
    get btnTakeScreenshot() {
        return $("#take-screenshot");
    }

    /**
     * Loading indicator label
     */
    get lblLoadingIndicator() {
        return $(".loader--show");
    }

    /**
     * The 3d object canvas
     */
    get canvas3dObject() {
        return $("#renderCanvas");
    }

    /**
     * The tools section
     */
    get sectionTools() {
        return $("#tools");
    }

    /**
     * Toggle button for the Bump option
     */
    get toggleBump() {
        return $('[name="bump"]');
    }

    /**
     * Toggle button for the lighting option
     */
    get toggleLighting() {
        return $('[name="lighting"');
    }
}

export default new LandingPage();