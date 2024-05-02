<?php
class PostData
{
    public function callback()
    {

        $channel = $_COOKIE['cstm_ppc_channel'];
        $campaign = $_COOKIE['cstm_ppc_campaign'];
        $placement = $_COOKIE['cstm_ppc_placement'];
        $keyword = $_COOKIE['cstm_ppc_keyword'];

        $fname = $_REQUEST['fname'];
        $lname = $_REQUEST['lname'];
        $email = $_REQUEST['email'];
        $mobile = str_replace(' ', '', $_REQUEST['mobile']);
        $projectname = $_REQUEST['projectname'];
        $source = $_REQUEST['source'];
        $message = $_REQUEST['message'];
        //$country_code = $_REQUEST['country_code'];
        $name = $fname . ' ' . $lname;

        $ip = $_SERVER['REMOTE_ADDR'];
        
        $fullmobile = "91" . $mobile;



        // Google Sheet Interation------------------

        $enqproject = '';

        $postFields = "entry.449648499=" . $name;
        $postFields .= "&entry.1379833540=" . $email;
        $postFields .= "&entry.758332158=" . $fullmobile;
        $postFields .= "&entry.1900106466=" . $message;
        $postFields .= "&entry.1693361781=" . $source;
        $postFields .= "&entry.1264955311=" . $enqproject;

        $postFields .= '&entry.1830911442=' . urlencode($_COOKIE['cstm_ppc_campaign']);
        $postFields .= '&entry.939490048=' . urlencode($_COOKIE['cstm_ppc_channel']);
        $postFields .= '&entry.729166844=' . urlencode($_COOKIE['cstm_ppc_keyword']);
        $postFields .= '&entry.839903606=' . urlencode($_COOKIE['cstm_ppc_placement']);
        $postFields .= '&entry.2003337495=' . urlencode($_COOKIE['cstm_ppc_device']);
        $postFields .= '&entry.1476153640=' .  $ip ;


        


        $ch3 = curl_init();
        curl_setopt($ch3, CURLOPT_URL, "google form url");
        curl_setopt($ch3, CURLOPT_POST, 1);
        curl_setopt($ch3, CURLOPT_POSTFIELDS, $postFields);
        curl_setopt($ch3, CURLOPT_HEADER, 0);
        curl_setopt($ch3, CURLOPT_RETURNTRANSFER, true);
        $result3 = curl_exec($ch3);


        // Fb Conversion API-------------------
        $array_post = array(
            'landing_page_url' => 'https://satrehappynest.in/',
            'email' => $email,
            'mobile' => $mobile,
            'event_name' => 'Thank You Page Vihang Capital of Thane',
            'remote_address' => $_SERVER['REMOTE_ADDR'],
            'http_user_agent' => $_SERVER['HTTP_USER_AGENT']
        );
        
        $json_data = json_encode($array_post);
        
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "website url",
            // CURLOPT_URL => "https://fbconversion.realatte.com/api/facebook-conversion/track",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $json_data,
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "content-type: application/json"
            ),
        ));
        $response1 = curl_exec($curl);

        

        // do not delete
        return true;
    }

}


?>