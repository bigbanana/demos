<?php
  class Sql extends SQLite3
  {
    function __construct()
    {
      $this->open('../data/result.db');
    }
  }

  $db = new Sql();
  if(!$db){
    echo $db->lastErrorMsg();
    return ;
  }
  $dbres = $db->query("SELECT * from resultdb_xitie");
  while($r = $dbres->fetchArray(SQLITE3_ASSOC)){
    $res[] = $r;
  }
  $db->close();
  $res[0]['result'] = json_decode($res[0]['result']);
  echo json_encode($res[0]);

?>