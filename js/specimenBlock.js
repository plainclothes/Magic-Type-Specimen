function specimenFull(el,className,fontName) {

  // set the client name for use in samples
  var clientName = "Tough-Grid";

  document.getElementById(el).innerHTML = ' \
    <div class="row ' + className + ' specimenBlock"> \
      <div class="col-md-6"> \
        <h4>Font / ' + fontName + '</h4>\
        <h2>Loud headline</h2> \
        <h2 class="normal soft">Soft headline</h2> \
        <nav class="navbar navbar-inverse"> \
          <div class="container-fluid"> \
            <!-- Brand and toggle get grouped for better mobile display --> \
            <div class="navbar-header"> \
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> \
                <span class="sr-only">Toggle navigation</span> \
                <span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span> \
              </button> \
              <a class="navbar-brand" href="#"><strong>ID</strong></a> \
            </div> \
            <!-- Collect the nav links, forms, and other content for toggling --> \
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> \
              <ul class="nav navbar-nav"> \
                <li><a href="#">Caprica</a></li> \
                <li class="active"><a href="#">Armistice Line</a></li> \
                <li><a href="#">Algae Planet</a></li> \
              </ul> \
              <ul class="nav navbar-nav navbar-right"> \
                <li class="dropdown"> \
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> \
                    Help <span class="caret"></span> \
                  </a> \
                  <ul class="dropdown-menu" role="menu"> \
                    <li><a href="#">What&rsquo;s up with Admiral Cain?</a></li> \
                    <li><a href="#">Where&rsquo;s my coffee?</a></li> \
                    <li><a href="#">Send feedback to ' + clientName + '</a></li> \
                    <li class="divider"></li> \
                    <li> \
                      <div class="input-group"> \
                        <input type="text" class="form-control" placeholder="Search the help docs" aria-describedby="search-help"> \
                        <span class="input-group-addon" id="search-help-submit"><i class="fa fa-search fa-fw"></i></span> \
                      </div> \
                    </li> \
                  </ul> \
                </li> \
              </ul> \
            </div> \
          </div> \
        </nav> \
        <ul class="nav nav-pills"> \
          <li role="presentation" class="active"><a href="#">Vipers</a></li> \
          <li role="presentation"><a href="#">Battlestars</a></li> \
          <li role="presentation"><a href="#">Base Ships</a></li> \
          <li role="presentation"><a href="#">The Brig</a></li> \
        </ul> \
        <button type="button" class="btn btn-default">Basic</button> \
        <button type="button" class="btn btn-primary">Strong</button> \
        <button type="button" class="btn btn-warning">Critical</button> \
        <button type="button" class="btn btn-danger">Catastrophic</button> \
        <table class="table table-hover"> \
          <thead><tr><th>ID</th><th>Name</th><th>City</th><th>LTV</th></tr></thead> \
          <tbody> \
            <tr><td scope="row">3524578</td><td>Bill Adama</td><td>Aerilon</td><td>75,025</td></tr> \
            <tr><td scope="row">5702887</td><td>Felix Gaeta</td><td>Delphi</td><td>1,597</td></tr> \
            <tr><td scope="row">9227465</td><td>Cara Thrace</td><td>Caprica City</td><td>317,811</td></tr> \
          </tbody> \
        </table> \
      </div> \
      <div class="col-sm-6"> \
        <div class="intro">I didn&rsquo;t know you were called &lsquo;Dennis&rsquo;</div> \
        <div class="row flush"> \
          <div class="col-sm-8"> \
            <p><strong>At last he addressed Bruno.</strong> I hope you have had a good night, my child? Bruno looked puzzled. I&rsquo;s had the same night oo&rsquo;ve had, he replied. There&rsquo;s only been one night since yesterday! It was the Professor&rsquo;s turn to look puzzled now. He took off his spectacles.</p> \
          </div> \
        </div> \
        <div class="row flush"> \
          <div class="col-sm-10"> \
            <p class="bump"><strong>You&rsquo;ll be glad to hear,</strong> he was saying, that the Barometer&rsquo;s beginning to move. Well, which way? said the Warden &mdash; adding, to the children, Not that I care, you know. Only he thinks it affects the weather. He&rsquo;s a wonderfully clever man, you know. Sometimes he says things that only the Other Professor can understand. Sometimes he says things that nobody can understand! Which way is it, Professor? Up or down? Neither!</p> \
          </div> \
        </div> \
        <p class="bigbump"><strong>Once, said the Mock Turtle at last,</strong> with a deep sigh, I was a real Turtle. These words were followed by a very long silence, broken only by an occasional exclamation of &ldquo;Hjckrrh!&rdquo; from the Gryphon, and the constant heavy sobbing of the Mock Turtle.</p> \
        <p class="squint"><strong>Old woman! Man! Man. Sorry.</strong> What knight live in that castle over there? I&rsquo;m thirty-seven. I-- what? I&rsquo;m thirty-seven. I&rsquo;m not old. Well, I can&rsquo;t just call you &ldquo;Man&rdquo;. Well, you could say &rsquo;Dennis&rsquo;. Well, I didn&rsquo;t know you were called &lsquo;Dennis&rsquo;. Well, you didn&rsquo;t bother to find out, did you? I did say &rsquo;sorry&rsquo; about the &lsquo;old woman&rsquo;, but from the behind you looked-- What I object to is that you automatically treat me like an inferior!</p> \
      <p class="bigbump tint">abcdefghijklmnopqrstuvwxyz <br/>ABCDEFGHIJKLMNOPQRSTUVWXYZ <br/>! &quot; &ldquo; &rdquo; $ % &amp;  \\(#_#)/ = ? * &lt; &gt; | @ ` ´ &copy; &times; {}</p> \
      </div> \
    </div> \
'
}
