<?php
  class Sql extends SQLite3
  {
    function __construct()
    {
      $this->open('./data/result.db');
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
  echo json_encode($res);

?>