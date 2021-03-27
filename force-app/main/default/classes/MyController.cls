public with sharing class MyController {
    public MyController(ApexPages.StandardController SC) {
        
    }

    public static String name {
        get { return 'MyController'; }
    }
    
    @RemoteAction
    public static String getName() {
        return name;
    }
}