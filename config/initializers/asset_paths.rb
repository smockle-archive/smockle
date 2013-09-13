module ActionView
  class AssetPaths
    
    def accept_encoding?(encoding)
      return false unless current_request
      (current_request.env['HTTP_ACCEPT_ENCODING'] || '').split(',').include?(encoding)
    end
  
    def rewrite_path_to_gzip?(source, options)
      [ "js", "css" ].include?(options[:ext]) and
        (! config.asset_host.blank?) and
        (source =~ /assets\//) and
        accept_encoding?('gzip')
    end
 
    def rewrite_path_to_gzip(source)
      source + ".cgz"
    end
    
    alias_method :actionview_assetpaths_compute_public_path, :compute_public_path
    def compute_public_path(source, dir, options = {})
      source = rewrite_path_to_gzip(source) if rewrite_path_to_gzip?(source, options)
      actionview_assetpaths_compute_public_path(source, dir, options)
    end
 
  end
end